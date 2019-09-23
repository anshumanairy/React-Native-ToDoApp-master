import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView, View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';

import Note from './note';

export default class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            noteArray: [],
            noteText: '',
        };
    }

    render() {
        let notes = this.state.noteArray.map((val, key)=>{
            return <Note key={key} keyval={key} val={val}
                    deleteMethod={()=>this.deleteNote(key)}/>
        });
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <StatusBar backgroundColor="#8a68f7" barStyle="light-content" />
                <View style={styles.header}>
                    <Text style={styles.headerText}>TO DO</Text>
                </View>

                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>

                <View style={styles.footer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Enter Note'
                        onChangeText={(noteText)=> this.setState({noteText})}
                        value={this.state.noteText}
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                </View>

                <TouchableOpacity onPress={ this.addNote.bind(this) } style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        );
    }

    addNote(){
        if(this.state.noteText){
            var d = new Date();
            this.state.noteArray.push({
                'date':d.getFullYear()+
                "/"+(d.getMonth()+1) +
                "/"+ d.getDate(),
                'note': this.state.noteText
            });
            this.setState({ noteArray: this.state.noteArray });
            this.setState({noteText:''});
        }
    }

    deleteNote(key){
        this.state.noteArray.splice(key, 1);
        this.setState({noteArray: this.state.noteArray});
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#8a68f7',
        alignItems: 'center',
        justifyContent:'center',
        borderBottomWidth: 2,
        borderBottomColor: '#ddd'
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 20
    },
    footer: {
        position: 'relative',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#8a68f7',
        borderTopWidth:2,
        borderTopColor: '#ededed'
    },
    addButton: {
        position: 'absolute',
        zIndex: 50,
        right: 20,
        bottom: 90,
        backgroundColor: '#8a68f7',
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24
    }
});
