import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, SectionList } from 'react-native'

export default ContactList = () => {
  const data = [
    {
      title: 'A',
      data: [
        { key: 1, name: 'Ala', image: 'https://cdn-icons-png.flaticon.com/512/219/219969.png' },
        { key: 2, name: 'Akram', image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' },
        { key: 3, name: 'Assia', image: 'https://cdn-icons-png.flaticon.com/512/219/219961.png' },
      ],
    },
    {
      title: 'B',
      data: [
        { key: 1, name: 'Bassam', image: 'https://cdn-icons-png.flaticon.com/512/4128/4128176.png' },
        { key: 2, name: 'Bushra', image: 'https://cdn-icons-png.flaticon.com/512/219/219984.png' },
      ],
    },
    {
      title: 'C',
      data: [
        { key: 1, name: 'Carmen', image: 'https://cdn-icons-png.flaticon.com/512/219/219967.png' },
      ],
    },
    {
      title: 'D',
      data: [
        { key: 1, name: 'dalila', image: 'https://cdn-icons-png.flaticon.com/512/219/219987.png' },
      ],
    },
  ]

  const [results, setResults] = useState(data)

  return (
    <View style={styles.container}>
      <SectionList
        sections={results}
        renderSectionHeader={({ section }) => {
          return (
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{section.title}</Text>
            </View>
          )
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <TouchableOpacity onPress={() => {}}>
                <Image style={styles.image} source={{ uri: item.image }} />
              </TouchableOpacity>
              <View style={styles.content}>
                <View style={styles.contentHeader}>
                  <Text style={styles.name}>{item.name}</Text>
                </View>
              </View>
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    marginTop: 20,
    padding: 10,
  },
  titleContainer: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor: '#56545d',
    padding: 10,
  },
  title: {
    fontSize: 25,
    color: 'white',
    marginLeft: 10,
  },
  container: {
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginLeft: 20,
  },
  time: {
    fontSize: 11,
    color: '#808080',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
})
