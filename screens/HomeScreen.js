import { ButtonCustom, HeaderTitle, InputCustom, ScreenWrapper } from '../components'
import { View, StyleSheet } from 'react-native'
export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.in}>
      <HeaderTitle text="Mes films" />
      <InputCustom placeholder="Recherche un film..." />
      <ButtonCustom text="FILM ALÉATOIRE" secondary />
      <ButtonCustom
        text="AJOUTER UN FILM"
        onPress={() => navigation.navigate("Ajouter")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  in :{
      marginTop:50,
      marginLeft:20,
      marginRight :20
  }
})