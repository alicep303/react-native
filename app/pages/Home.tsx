import { useEffect, useState } from "react";
import { FlatList, Platform, StyleSheet,Text, TextInput} from "react-native";
import{SafeAreaView} from "react-native-safe-area-context";
import{Button} from "../components/Button";
import {SkillCard} from "../components/SkillCard";

interface SkillFormat {
    id:string
    name:string
}

export function Home() {

    const [newSkill,setNewSkill] = useState('')
    const [mySkills ,setMySkills] = useState<SkillFormat[]>([])

    const [greetings, setGreetings] = useState('')
 
        //1 função 2 dependencia
    // useEffect(() => {
    //     console.log("useEffect, executado!")
    // },[mySkills])

    useEffect{() => {
        //const currentHour = new Date().getHours()
        const currrentHour = 22
        // console.log(currentHour)

        if (currentHour < 12){
            setGreetings('Good morning!')
        }
        else  if (currentHour >= 12 && currentHour < 18){
            setGreetings('Good efternoon!')
        }
        else{
            setGreetings('Good night!')
        }
    },[]}

 function handleAddNewSkill(){
        const data = {
            id:string(new Date().getTime()),
            name: newSkill
        }

        // ['programa', 'react native', 'proximo item']
        // setMySkills(oldState => [...oldState, data])
        setMySkills([...mySkills, data])
    }

    function handleRemoveSkill(id: string){
        setMySkills(oldState => oldState.filter(
            skill =>skill.id !=== id
        ))
    }

    return{
    <SafeAreaView 
    style={styles.container}>
      <Text style={styles.title}>Welcome, Alice

      </Text>

      <Text style={styles.greatings}>
      {greatings}
      </Text>


      <TextInput
       style={styles.input}
      placeholder="write your skill"
      placeholderTextColor='#555'
    //   onChangeText={setNewSkill}//{() => newSkill = newSkill + text}
   // onChangeText={handleInputChange} //onChangeText = {text => handleinputchange}
      />


    <Button title="Adicionar" onPress={handleAddNewSkill} activeOpacity={0.1}/>
    
{/* 
        {
            mySkills.map(skill =>(
              <SkillCard key={skill.id} skill={skill.name} activeOpacity={1}/>
            ))
        } */}

      {/*   <ScroolView>

        { 
        
            mySkills.map(skill =>(
              <SkillCard key={skill.id} skill={skill.name} activeOpacity={1}/>
            ))
        } </ScroolView> */}

        <FlatList
         data={mySkills}keyExtractor={item => item.id} 
         renderItem=({ item }) => (
         <SkillCard key={skill.id} skill={skill.name}
          onPress={() => handleRemoveSkill(item.id)} activeOpacity={1}/>
        )}
        />

       
    
    {/* {<Text style={styles.textFooter}>{newSkill}</Text>} */}
    </SafeAreaView>
    )
}


export const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#121015',
      paddingHorizontal:20,
      paddingVertical:50
    },
    title:{
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    greating:{
        color: '#fff'
    },
    input:{
        backgroundColor: '#1f1e25',
        color: '#fff',
        fontSize:18,
        padding:Platform.OS === 'ios'? 15:10,
        marginTop : 20,
        borderRadius: 7 
    },
    textFooter:{
        justifyContent: "flex-end",
        color:'#fff'
    }
})