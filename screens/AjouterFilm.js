import { View , Text} from "react-native"
import { ButtonCustom, HeaderTitle, InputCustom, ScreenWrapper } from "../components"
import { Titre } from "../components/Titre"

export const AjouterFilm  = () =>{
    return (
      <View>
        <Titre text="Titre" etoile="*" />
        <InputCustom placeholder="Titre du film" />

        <Titre text="Réalisateur" etoile="*" />
        <InputCustom placeholder="Nom du réalisateur" />

        <Titre text="Anée de sortie" etoile="*" />
        <InputCustom placeholder="EX : 2004" />

        <Titre text="Genre" etoile="*" />
        <InputCustom placeholder="EX : Drame, Comédie" />

        <Titre text="Note(sur 5)" etoile="*" />
        <InputCustom placeholder="EX : 4.5" />

        <ButtonCustom text="ENREGISTRER"/>
      </View>
    );
}