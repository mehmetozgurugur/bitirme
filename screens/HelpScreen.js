import React, { useState,useLayoutEffect } from 'react';
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  SafeAreaView,
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';

const CONTENT = [
  {
    title: 'Kullanım Koşulları',
    content:
      '',
  },
  {
    title: 'Güvenlik ve Gizlilik',
    content:
      '',
  },
  {
    title: 'İade Politikası',
    content:
      '',
  },
];


const SELECTORS = [
  { title: 'KK', value: 0 },
  { title: 'Güvenlik ve Gizlilik', value: 1 },
  { title: 'İade Politikası', value: 2 },
  { title: 'Kapat' },
];

const HelpScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Destek",
    });
  }, []);

const [activeSections, setActiveSections] = useState([]);
const [collapsed, setCollapsed] = useState(true);
const [multipleSelect, setMultipleSelect] = useState(false);
const toggleExpanded = () => {
  setCollapsed(!collapsed);
  };
const setSections = (sections) => {
  setActiveSections(sections.includes(undefined) ? [] : sections);
  };
const renderHeader = (section, _, isActive) => {
 
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  const renderContent = (section, _, isActive) => {
    //Accordion Content view
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Animatable.Text
          animation={isActive ? 'bounceIn' : undefined}
          style={{ textAlign: 'center' }}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView>


          <Text style={styles.selectTitle}>
           Lütfen okumak istediğiniz maddeyi seçin.
          </Text>

         
          <View style={styles.selectors}>
            {SELECTORS.map((selector,index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSections([selector.value])}
               
              >
                <View style={styles.selector}>
                  <Text
                    style={
                      activeSections.includes(selector.value) &&
                      styles.activeSelector
                    }>
                    {selector.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
         
          <Accordion
            activeSections={activeSections}
           
            sections={CONTENT}
            
            touchableComponent={TouchableOpacity}
            
            expandMultiple={multipleSelect}
        
            renderHeader={renderHeader}
           
            renderContent={renderContent}
           
            duration={400}
            
            onChange={setSections}
            
          />
          
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: '#CCFFE5',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#CCFFE5',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
    textAlign: 'center',
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});
