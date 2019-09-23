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
                <TouchableOpacity onPress={this.toggleItem}></TouchableOpacity>
                <TouchableOpacity>
                    <View style={[styles.circle, isCompleted ? styles.completeCircle : styles.incompleteCircle]} />
                    <Text style={[styles.noteTextDate]}>{this.props.val.date}</Text>
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
        paddingBottom: 20,
        paddingRight:30,
        // alignItems: 'center',
        // borderLeftWidth: 10,
        // borderLeftColor: '#E91E63'
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
