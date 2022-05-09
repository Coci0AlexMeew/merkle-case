import React from 'react'
import { View } from 'react-native';
import { StoryCard } from './StoryCard';
import { StoryDataType } from '../types';

interface StoryCardsPropTypes {
  stories: StoryDataType[];
}

export const StoryCards = ({ stories }: StoryCardsPropTypes) => {
    return (
      <>
        {stories.map((_: any, index: number) => (
            <View 
              key={stories[index].authorId + stories[index].timestamp}
              style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}
              >          
            { index % 2 === 0 ? 
              (
                <View 
                style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', paddingVertical: 12.5, paddingHorizontal: 25 }}
                >
                  <StoryCard
                    title={stories[index].title}
                    url={stories[index].url}
                    timestamp={stories[index].timestamp}
                    score={stories[index].score}
                    authorId={stories[index].authorId}
                    authorKarmaScore={stories[index].authorKarmaScore}
                    cardNumber={index + 1}
                    />
                  <View style={{ width: 25 }} />
                  <StoryCard
                    title={stories[index + 1].title}
                    url={stories[index + 1].url}
                    timestamp={stories[index + 1].timestamp}
                    score={stories[index + 1].score}
                    authorId={stories[index + 1].authorId}
                    authorKarmaScore={stories[index + 1].authorKarmaScore}
                    cardNumber={index + 2}
                    />
                </View>
              ) : null}
          </View>
        ))}
        </>
    )
}