import { StyleSheet } from "react-native";

export const text = StyleSheet.create({
    fboldheader: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    fboldsmall: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    fsmall: {
        fontSize: 14,
    },
    buttonText: {
        color: 'white',
    },
    flinksmall: {
        fontSize: 14,
        color: 'blue',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
    },
    heading: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
    },
    body: {
        fontSize: 16,
        color: '#666',
        lineHeight: 24, // Adds line spacing for readability
    },
        smallText: {
        fontSize: 14,
        color: '#999',
    },
        linkText: {
        fontSize: 16,
        color: '#007bff',
        textDecorationLine: 'underline', // Adds an underline to the text
    },
    boldText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
        mutedText: {
        fontSize: 16,
        color: '#aaa',
    },
        centeredText: {
        textAlign: 'center',
        color: '#333',
    },
    upperCase: {
        textTransform: 'uppercase', // Makes text uppercase
    },
    italicText: {
        fontStyle: 'italic',
        fontSize: 16,
        color: '#333',
    },
    errorText: {
        fontSize: 14,
        color: 'red', // Used for error messages
    },
})