import { StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { db } from "../../firebase";
import { doc, onSnapshot } from "firebase/firestore";

const Home = () => {
  const navigation = useNavigation();
  const [songData, setSongData] = useState({});

  // Adding document to a collection
  const addDocument = async () => {
    // You will pass in your own document ID (song-2) in this instance with `setDoc`
    // await setDoc(doc(db, "songs", "song-2"), {
    //   title: "Out of Time",
    //   artist: "The Weeknd"
    // });

    // Firebase will autogenerate a document ID when using `addDoc`
    const docRef = await addDoc(collection(db, "songs"), {
      title: "Dawn FM",
      country: "The Weeknd"
    });

    console.log(docRef.id);
  };

  // Retrieiving a document from Firestore
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

  // Get all documents from a collection
  const getAllDocuments = async () => {
    let allDocs = await getDocs(collection(db, "songs"));

    // Printing out the array of documents (objects), probably put this in state variable
    // [ {title: Dawn FM, artist: The Weeknd }, ... ]
    console.log(
      allDocs.docs.map((document) => {
        return document.data();
      })
    );
  };

  // Update document with a new field 
  const updateDocument = async () => {
    const song1Ref = doc(db, "songs", "song-1");

    // add a field
    await updateDoc(song1Ref, {
      duration: 1000
    });
  };

  // onSnapshot listens for changes in the database and will automatically re-run the console.log when the data changes
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "songs", "song-1"), (doc) =>
      console.log("current data: ", doc.data())
    );

    // Cleanup - we have to cleanup because we are subscribing and listening, we don't want to keep the subscription if we move off the screen
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
