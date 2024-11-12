import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Book } from '../entity/Book';
import { Ganre } from '../entity/Ganre';

/**
 *
 * @param {{book: Book}} param0
 * @returns
 */
const BookCard = ({ book }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: book.bookCover }} style={styles.cover} />
            <Text style={styles.author} numberOfLines={1}>{book.author}</Text>
            <Text style={styles.title} numberOfLines={1}>{book.title}</Text>
            {/* <Text>Ganre: {Ganre.ACTION}</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 120,
        alignItems: 'center'
    },
    cover: {
        width: 100,
        aspectRatio: 3 / 4
    },
    author: {
        color: 'grey'
    },
    title: {
        fontWeight: '600'
    }
})

export default BookCard;
