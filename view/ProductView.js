import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'

export default ProductDetail = () => {
  const productData = {
    name: 'Product title',
    description:
      'As a general rule, use props to configure a component when it renders. Use state to keep track of any component data that you expect to change over time.',
    created: '',
    images: [
      'https://cdn-icons-png.flaticon.com/512/219/219969.png',
      'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
      'https://cdn-icons-png.flaticon.com/512/219/219961.png',
    ],
    colors: ['#56545d', '#d9d2e9', '#00CED1', '#228B22', '#20B2AA', '#FF4500'],
  }

  const [product, setProduct] = useState(productData)
  const [selectedImage, setSelectedImage] = useState()

  const __renderImages = () => {
    return (
      <View style={styles.smallImagesContainer}>
        {product.images.map((prop, key) => {
          return (
            <TouchableOpacity
              key={key}
              onPress={() => {
                setSelectedImage(prop)
              }}>
              <Image style={styles.smallImage} source={{ uri: prop }} />
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }

  const __renderColors = () => {
    return (
      <View style={styles.contentColors}>
        {product.colors.map((prop, key) => {
          return (
            <TouchableOpacity
              key={key}
              style={[styles.btnColor, { backgroundColor: prop }]}></TouchableOpacity>
          )
        })}
      </View>
    )
  }

  var mainImage = selectedImage ? selectedImage : product.images[0]
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.name}>{product.name}</Text>
          </View>
          <View style={styles.cardContent}>
            <View style={styles.header}>
              <View style={styles.mainImageContainer}>
                <Image style={styles.mainImage} source={{ uri: mainImage }} />
              </View>
              {__renderImages()}
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Colors</Text>
          </View>
          <View style={styles.cardContent}>{__renderColors()}</View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Description</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.description}>{product.description}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardContent}>
            <TouchableOpacity style={styles.shareButton}>
              <Text style={styles.shareButtonText}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#ebf0f7',
    marginBottom:10,
  },
  content: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
  },
  mainImage: {
    width: 200,
    height: 200,
  },
  smallImagesContainer: {
    flexDirection: 'column',
    marginLeft: 30,
  },
  smallImage: {
    width: 60,
    height: 60,
    marginTop: 5,
  },
  btnColor: {
    height: 40,
    width: 40,
    borderRadius: 40,
    marginHorizontal: 3,
  },
  contentColors: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 22,
    color: '#696969',
    fontWeight: 'bold',
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
    color: '#696969',
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#56545d',
  },
  shareButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },

  //card
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 5,
    backgroundColor: 'white',
    marginHorizontal: 5,
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
    marginBottom:10,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardTitle: {
    color: '#00BFFF',
  },
})
