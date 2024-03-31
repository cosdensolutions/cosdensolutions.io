import { NextRequest, NextResponse } from 'next/server';

import { env } from '@/utils/env';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.redirect(env.BASE_URL);
  }

  let accessToken: string;

  const authToken = btoa(
    `${env.DISCORD_CLIENT_ID}:${env.DISCORD_CLIENT_SECRET}`,
  );

  const authResponse = await fetch('https://discord.com/api/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${authToken}`,
    },
    body: new URLSearchParams({
      client_id: env.DISCORD_CLIENT_ID,
      client_secret: env.DISCORD_CLIENT_SECRET,
      grant_type: 'authorization_code',
      code: code,
      scope: 'identify',
      redirect_uri: env.DISCORD_REDIRECT_URL,
    }),
  });

  if (!authResponse.ok) {
    console.log(authResponse);
    console.log('Failed to authenticate with Discord');
    return NextResponse.redirect(env.BASE_URL);
  }

  const authResponseJson = await authResponse.json();
  accessToken = authResponseJson.access_token;

  const userResponse = await fetch('https://discord.com/api/users/@me', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!userResponse.ok) {
    console.log(userResponse);
    console.log('Failed to fetch user from Discord');
    return NextResponse.redirect(env.BASE_URL);
  }

  const json = await userResponse.json();

  const user = {
    accessToken,
    discordId: json.id,
    username: json.username,
    email: json.email,
  };

  const assistantBotResponse = await fetch(
    `${env.DISCORD_BOT_BASE_URL}/api/v1/project-react/add-user`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.DISCORD_BOT_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user }),
    },
  );

  if (!assistantBotResponse.ok) {
    console.log(assistantBotResponse);
    console.log('Failed to add user to Discord bot');
    return NextResponse.redirect(env.BASE_URL);
  }

  return NextResponse.redirect(
    `${env.BASE_URL}/project-react/success?joined_discord=true`,
  );
}
