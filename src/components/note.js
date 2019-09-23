import React, { Component } from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default class Note extends Component {
    state = {
      isCompleted: false
    };

    toggleComplete(){
      toggleItem = () => {
        this.setState(prevState => {
          return{
            isCompleted: !prevState.isCompleted
          }
        })
      }
    }

    render() {
        return (
            <KeyboardAvoidingView key={this.props.keyval} style={styles.note} behavior="padding" enabled>
                <TouchableOpacity>
                    <View style={styles.circle} />
                    <Text style={[styles.noteText]}>{this.props.val.date}</Text>
                    <Text style={[styles.noteText]}>{this.props.val.note}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                    <Text style={styles.noteDeleteText}>-</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}


const styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        borderBottomWidth:1,
        borderBottomColor: '#ededed'
    },
    noteText: {
        paddingLeft: 30,
        paddingBottom: 10,
        paddingRight:30,
        // alignItems: 'center',
        // borderLeftWidth: 10,
        // borderLeftColor: '#E91E63'
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 5,
        borderColor: 'purple',
        borderWidth: 1,
    },
    completeCircle: {
        borderColor: '#bbb'
    },
    incompleteCircle: {
        borderColor: '#DA4453'
    },
    strikeText: {
        color: '#bbb',
        textDecorationLine: 'line-through'
    },
    unstrikeText: {
        color: "#29323c"
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8a68f7',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },
    noteDeleteText: {
        color: 'white'
    }
});
