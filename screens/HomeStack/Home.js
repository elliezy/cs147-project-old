import { StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { db } from "../../firebase";
import { doc, onSnapshot } from "firebase/firestore";

const Home = () => {
  const navigation = useNavigation();
  const [songData, setSongData] = useState({});

  const addDocument = async () => {
    // await setDoc(doc(db, "songs", "song-2"), {
    //   title: "Out of Time",
    //   artist: "The Weeknd"
    // });

    const docRef = await addDoc(collection(db, "songs"), {
      title: "Dawn FM",
      country: "The Weeknd"
    });

    console.log(docRef.id);
  };

  const getDocument = async () => {
    const docRef = doc(db, "songs", "song-1");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setSongData(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  const getAllDocuments = async () => {
    let allDocs = await getDocs(collection(db, "songs"));
    console.log(
      allDocs.docs.map((document) => {
        return document.data();
      })
    );
  };

  const updateDocument = async () => {
    const song1Ref = doc(db, "songs", "song-1");

    // add a field
    await updateDoc(song1Ref, {
      duration: 1000
    });
  };

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "songs", "song-1"), (doc) =>
      console.log("current data: ", doc.data())
    );

    // Cleanup
    return unsub;
  }, []);

  return (
    <View>
      {/* <Text>{songData.title}</Text>
      <Text>{songData.artist}</Text> */}
      <Button
        title="Navigate me"
        onPress={() => navigation.navigate("HomeProfile")}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
