import React, { Component } from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default class Note extends Component {
    state = {
      isCompleted: false
    };

    toggleItem = () => {
      this.setState(prevState => {
        return{
          isCompleted: !prevState.isCompleted
        }
      })
    }

    render() {
        const {isCompleted} = this.state;
        return (
            <KeyboardAvoidingView key={this.props.keyval} style={styles.note} behavior="padding" enabled>
                <TouchableOpacity onPress={this.toggleItem}>
                    <View style={[styles.circle, isCompleted ? styles.completeCircle : styles.incompleteCircle]}/>
                </TouchableOpacity>

                <Text style={[styles.noteTextDate, isCompleted ? styles.strikeText : styles.unstrikeText]}>{this.props.val.date}</Text>
                <Text style={[styles.noteText, isCompleted ? styles.strikeText : styles.unstrikeText]}>{this.props.val.note}</Text>

                <TouchableOpacity onPress={this.props.deleteMethod} style={[isCompleted ? styles.incomplete : styles.noteDelete]}>
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
        paddingBottom: 20,
        paddingRight:30,
    },
    noteTextDate: {
        paddingLeft: 30,
        paddingRight:30,
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 5,
        borderColor: 'purple',
        borderWidth: 1,
    },
    completeCircle: {
        borderColor: '#bbb',
        backgroundColor: '#bbb'
    },
    incompleteCircle: {
        borderColor: '#DA4453'
    },
    incomplete: {
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
