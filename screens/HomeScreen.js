import { ButtonCustom, HeaderTitle, InputCustom, ScreenWrapper } from '../components'
import { View, StyleSheet, Text } from 'react-native'
import { SQLiteProvider } from "expo-sqlite";
import { useState } from 'react';
export const HomeScreen = ({route, navigation }) => {

  const [nbrFilm, setNbrFilm] = useState(0)
 const  film  = route.params;
  return (
    <View>
      {console.log(film)}
      <View style={styles.in}>
        <HeaderTitle text="Mes films" />
        <InputCustom placeholder="Recherche un film..." />
      </View>
      {!film ? (
        <Text>Nombre de film {nbrFilm} </Text>
      ) : (
        <View>
          <Text>{film.titre}</Text>
          <Text>{film.realisateur}</Text>
          <Text>{film.note} / 5</Text>
        </View>
      )}

      <View style={styles.ba}>
        <ButtonCustom text="FILM ALÉATOIRE" secondary />
        <ButtonCustom
          text="AJOUTER UN FILM"
          onPress={() => navigation.navigate("Ajouter")}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  in :{
      marginTop:50,
      marginLeft:20,
      marginRight :20
  },
  ba :{
    marginTop : 500
  }
})