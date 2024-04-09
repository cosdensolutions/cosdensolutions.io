'use client';

import { Frown, ThumbsDown, ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'sonner';

import { Button, Toaster } from '@/components/ui';
import { cn } from '@/lib/utils';

export default function CommentsSection() {
  const [likedComments, setLikedComments] = useState<number[]>([]);

  const comments = [
    {
      text: 'thank god i stumbled upon your channel..i am learning about all the hooks that react has to offer through your channel..i am loving the clear explanations that you provide..not a single dull moment in the video! kudos to you sir! love you!!! ❤️',
      author: '@smrpkrl',
      profilePhoto: '/project-react-pp-smrpkrl.jpeg',
    },
    {
      text: 'Your videos has helped to understand react. And honestly, this is my first comment on a react tutorial videos. I did not just subscribed and liked but also allowed notification for new videos from your channel. Thank you',
      author: '@fizdanielz6564',
      profilePhoto: '/project-react-pp-fizdanielz6564.jpeg',
    },
    // {
    //   text: 'finally !! after watching 1000s of videos, a dude that explains! clearly how the hooks work, thank you ! 🙏💪',
    //   author: '@zuperhache',
    //   profilePhoto: '/project-react-pp-zuperhache.jpeg',
    // },
    // {
    //   text: 'wow very informative tutorial, there is so much to learn from you. I just hope you will keep creating vidoes that share your expertise in web development',
    //   author: '@erikreyes6093',
    //   profilePhoto: '/project-react-pp-erikreyes6093.jpeg',
    // },
    {
      text: 'I am becoming a fan of your teaching style. First i watched your redux video and now i am not watching any other redux tutorial. because that video is so straightforward and to the point. please keep on adding videos like this. already subscribed:) 👍',
      author: '@SonuKumarTech',
      profilePhoto: '/project-react-pp-SonuKumarTech.jpeg',
    },
  ];

  return (
    <>
      <Toaster
        position="bottom-center"
        toastOptions={{
          classNames: {
            toast: 'border-0 md:min-w-[450px]',
            title: 'text-lg',
            description: 'text-lg text-muted-foreground',
            icon: 'h-8 w-8',
          },
        }}
      />
      <h3 className="pb-0 text-center">
        Here is what my followers have to say about how I teach
      </h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {comments.map((comment, index) => {
          const isLiked = likedComments.includes(index);

          return (
            <div
              key={index}
              className="flex flex-col items-center gap-4 rounded-lg bg-background-lighter px-4 py-8 text-left"
            >
              <Image
                className="mx-auto h-[100px] w-[100px] rounded-full border-2 border-primary md:mx-0 md:h-[70px] md:w-[70px]"
                src={comment.profilePhoto}
                width={70}
                height={70}
                alt={comment.author + "'s profile picture"}
              />
              <div>
                <div className="text-md mb-4 text-center text-muted-foreground">
                  {comment.author}
                </div>
                <p className="text-md text-foreground">{comment.text}</p>
                <div className="mt-4 flex flex-row gap-8">
                  <Button
                    className="h-auto p-0"
                    variant="link"
                    onClick={() => {
                      setLikedComments(prev =>
                        isLiked
                          ? prev.filter(i => i !== index)
                          : [...prev, index],
                      );
                    }}
                  >
                    <ThumbsUp
                      className={cn(
                        'stroke-foreground',
                        isLiked && 'fill-foreground',
                      )}
                    />
                  </Button>
                  <Button
                    className="h-auto p-0"
                    variant="link"
                    onClick={() =>
                      toast.error("Hey! Don't be mean!", {
                        icon: <Frown className="h-8 w-8 stroke-foreground" />,
                        description:
                          'Why would you dislike such a nice comment?',
                      })
                    }
                  >
                    <ThumbsDown className="stroke-foreground" />
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
