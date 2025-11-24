import {StyleSheet, Text, TouchableOpacity} from "react-native"
interface SkillCardProps extends TouchableOpacityProps{
    
}

export function skillCard(){
    return(
        
            <TouchableOpacity style={styles.buttonSkill}>
            <Text style={styles.buttonText}>Skill nova</Text>
            </TouchableOpacity>
        )
}


export const styles = StyleSheet.create({
     buttonText:{
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'

    },

    buttonSkill: {
         backgroundColor: '#1f1e25',
        color: '#fff'
        fontSize:14,
        marginTop:12,
        padding: 12,
        alignItems: 'center',
        borderRadius: 7 

    },
   
})