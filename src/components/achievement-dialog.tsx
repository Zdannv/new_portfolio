
"use client";

import React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  getImageById,
  type Achievement,
} from "@/lib/data";

interface AchievementDialogProps {
  achievement: Achievement;
  children: React.ReactNode;
}

export function AchievementDialog({ achievement, children }: AchievementDialogProps) {
  const evidenceImages = (achievement.imageIds ?? [])
    .map(getImageById)
    .filter(Boolean);

  // If there's no button to trigger, but there are images, it won't show.
  // The logic in page.tsx handles whether to wrap with this dialog.
  if (!evidenceImages.length) {
    return <>{children}</>;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-headline text-3xl text-primary mb-4">
            Evidence for: {achievement.title}
          </DialogTitle>
        </DialogHeader>
        <div>
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              {evidenceImages.map((image) => (
                image && (
                  <CarouselItem key={image.id}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-video items-center justify-center p-0 relative">
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-contain rounded-md"
                            data-ai-hint={image.imageHint}
                          />
                        </CardContent>
                        <div className="p-2 text-center">
                          <p className="text-xs text-muted-foreground">{image.description}</p>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                )
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  );
}
