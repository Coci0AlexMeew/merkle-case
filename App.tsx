import React from 'react'
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { StoryCards } from './components';
import { fetchStories } from './services';
import { StoryDataType } from './types';

export default function App() {
  const [stories, setStories] = React.useState<StoryDataType[] | []>([]);
  
  React.useEffect(() => {
    const fetchData = async () => {
      const fetchedStories = await fetchStories();
      setStories(fetchedStories);
    }
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
     <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
      <StoryCards stories={stories} />
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
