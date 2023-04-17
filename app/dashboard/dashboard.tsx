import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Fridge from '../fridge/fridge';
import Recipes from '../recipes/recipes';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'fridge' | 'recipes'>('fridge');

  const handleTabPress = (tab: 'fridge' | 'recipes') => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      {activeTab === 'fridge' ? (
        <Fridge/>
      ) : (
        <Recipes/>
      )}

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'fridge' ? styles.activeTabButton : null]}
          onPress={() => handleTabPress('fridge')}
        >
          <Text style={[styles.tabButtonText, activeTab === 'fridge' ? styles.activeTabButtonText : null]}>Fridge</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'recipes' ? styles.activeTabButton : null]}
          onPress={() => handleTabPress('recipes')}
        >
          <Text style={[styles.tabButtonText, activeTab === 'recipes' ? styles.activeTabButtonText : null]}>Recipes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 30,
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    height: 80,
  },
  tabButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 20,
  },
  tabButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  activeTabButton: {
    backgroundColor: '#000',
  },
  activeTabButtonText: {
    color: '#fff',
  },
  listContainer: {
    marginTop: 20,
    width: '80%',
    alignItems: 'flex-start',
  },
  listItem: {
    marginVertical: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default Dashboard;
