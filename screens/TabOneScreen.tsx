import { StyleSheet, ScrollView  } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { AntDesign } from '@expo/vector-icons'; 

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.background}>
      <View style={styles.buttons}>
      <AntDesign name="stepbackward" size={50} color="#F2DBAE"  style={{backgroundColor:"#0C0D0C"}} />
        <AntDesign name="play" size={50} color="#F2DBAE" style={{backgroundColor:"#0C0D0C"}} />
        <AntDesign name="stepforward" size={50} color="#F2DBAE" style={{backgroundColor:"#0C0D0C"}} />
      </View>
       <View style={styles.container}>
        <ScrollView  style={styles.scroll}>
        <View style={styles.squareContainer}>
            <View style={styles.square}>
              
            </View>
         </View>
         <View style={styles.squareContainer}>
            <View style={styles.square}></View>
         </View>
         <View style={styles.squareContainer}>
            <View style={styles.square}></View>
         </View>
         <View style={styles.squareContainer}>
            <View style={styles.square}></View>
         </View>
         <View style={styles.squareContainer}>
            <View style={styles.square}></View>
         </View><View style={styles.squareContainer}>
            <View style={styles.square}></View>
         </View><View style={styles.squareContainer}>
            <View style={styles.square}></View>
         </View><View style={styles.squareContainer}>
            <View style={styles.square}></View>
         </View><View style={styles.squareContainer}>
            <View style={styles.square}></View>
         </View><View style={styles.squareContainer}>
            <View style={styles.square}></View>
         </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor:"#F4F6FA",
    width: "100%"
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0C0D0C'
  },
  scroll: {
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    marginBottom: 15
  },
  squareContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent:"space-between",
    backgroundColor:"#F4F6FA",
  },
  square: {
    width : 325,
    height : 200,
    borderRadius: 20,
    backgroundColor: "black",
    marginLeft: 15
  },
  text: {
   color: 'white',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
