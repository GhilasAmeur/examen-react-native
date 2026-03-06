import { View , Text} from "react-native"
import { ButtonCustom, HeaderTitle, InputCustom, ScreenWrapper } from "../components"
import { Titre } from "../components/Titre"
import { Error } from "../components/Error";
import { useSQLiteContext } from "expo-sqlite";
import { useState } from "react";

export const AjouterFilm  = ({navigation, route}) =>{
  const db = useSQLiteContext();
    const [titre, setTitre] = useState("")
     const [realisiteur, setRealisateur] = useState("");
      const [annee, setAnee] = useState("");
       const [genre, setGenre] = useState("");
        const [note, setNote] = useState("");
        const [mesFilms, setMesFilms] = useState([])
    const addFilm = () => {
        //console.log(titre)
        const film = {
            titre : titre,
            realisiteur : realisiteur,
            annee : annee,
            genre : genre,
            note : note
        }
        setMesFilms(() => [...mesFilms, film])
        navigation.navigate("Accueil", film);
        

    }

  
    return (
      <View>
        <Titre text="Titre" etoile="*" />
        <InputCustom
          placeholder="Titre du film"
          value={titre}
          onChangeText={setTitre}
        />
        <Error text="Le titre doît contenir au moins 2 caractères" />

        <Titre text="Réalisateur" etoile="*" />
        <InputCustom
          placeholder="Nom du réalisateur"
          value={realisiteur}
          onChangeText={setRealisateur}
        />
        <Error text="Le réalisateur  doît contenir au moins 2 caractères" />

        <Titre text="Anée de sortie" etoile="*" />
        <InputCustom
          placeholder="EX : 2024"
          value={annee}
          onChangeText={setAnee}
        />
        <Error text="Année invalide entre (1900 et 2026)" />

        <Titre text="Genre" etoile="*" />
        <InputCustom
          placeholder="EX : Drame, Comédie"
          value={genre}
          onChangeText={setGenre}
        />
        <Error text="Le genre est requis" />

        <Titre text="Note(sur 5)" etoile="*" />
        <InputCustom
          placeholder="EX : 4.5"
          value={note}
          onChangeText={setNote}
        />
        <Error text="La note doît être comprise entre 0 et 5" />

        <ButtonCustom text="ENREGISTRER" onPress={addFilm} />
      </View>
    );
}