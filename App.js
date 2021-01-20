import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  FlatList
} from 'react-native'

import DATA from './src/data';

const App = () => {
  // Textinput'dan alınan değişken
  const [value, onChangeText] = React.useState();

  // Alttaki tab barda hangi menünün açıldığını kontrol etmek için kullanılan değişkenler
  const [isShowingChats, setIsShowingChats] = useState(true);
  const [isShowingDiscover, setIsShowingDiscover] = useState(false);
  const [isShowingMode, setIsShowingMode] = useState(false);


  const renderItem = ({ item }) => {
    const rnd = Math.floor(Math.random() * 300) + 200;
    const image = item.photo + rnd
    return (
      <TouchableOpacity 
      style={styles.usersTouchable}
      onPress={() => alert(item.username)}
      >
        <View style={styles.usersImageandText}>
          <Image
            style={{ width: 60, height: 60, borderRadius: 500 }}
            source={{uri: image} }
            resizeMode={'center'}
          />
          <View style={styles.usersTextsView}>
            <Text style={styles.username}>
              {item.username}
            </Text>
            <Text style={styles.message}>
              {item.message}
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.time}>
            {item.time}
          </Text>
          {
            item.numberMessage && <Text style={styles.numberOfMessage}>
              {item.numberMessage}
            </Text>
          }
          {
            item.tick && <Image
              style={{ width: 25, height: 25, position: "absolute", marginTop: 25, marginLeft: 5 }}
              source={require('./src/images/tick.png')}
              resizeMode={'cover'}
            />
          }
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={styles.container}>
        {/* Bildirim çubuğunun rengini ayarlanması */}
        <StatusBar backgroundColor={'#54ae41'} />
        {/* Search kısmı ve üst tab bar START*/}
        <View style={styles.viewTop}>
          <View style={styles.viewTop1}>
            {/* Sol Üstte Profil Fotoğrafı Butonu */}
            <View>
              <TouchableOpacity
                style={styles.profilImageTouchable}
                onPress={() => alert("Profil Fotoğrafı")}
              >
                <Image
                  style={{ width: 32, height: 32, borderRadius: 500 }}
                  source={require('./src/images/1.jpg')}
                  resizeMode={'center'}
                />
              </TouchableOpacity>
            </View>

            {/* Ahlem Yazısı */}
            <View>
              <Text style={styles.textAhlem}>
                Ahlem
              </Text>
            </View>

            {/* Sağ Üstteki Buton */}
            <View>
              <TouchableOpacity
                style={{ marginTop: 5 }}
                onPress={() => alert("Sağ üsteki menü")}
              >
                <Image
                  style={{ width: 40, height: 40 }}
                  source={require('./src/images/reactnative.png')}
                  resizeMode={'center'}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Search Çubuğu */}
          <View style={styles.viewTextInput}>
            <TextInput
              inlineImageLeft='search_icon'
              inlineImagePadding={50}
              style={styles.textInput}
              onChangeText={text => onChangeText(text)}
              value={value}
              placeholder={'Search'}
              placeholderTextColor={'#fff'}
            />
          </View>
        </View>
        {/* Search kısmı ve üst tab bar END*/}

        {/* Kullanıcıların listendiği yer START*/}
        <View style={styles.viewMiddle}>
          <View style={styles.users}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            //extraData={selectedId}
            />
          </View>
        </View>
        {/* Kullanıcıların listendiği yer END*/}

        {/* Pencil Button */}
        <View style={styles.pencil}>
          <TouchableOpacity
            onPress={() => alert("Pencil clicked")}
          >
            <Image
              style={styles.pencilImage}
              source={require('./src/images/pencil.png')}
              resizeMode={'cover'}
            />
          </TouchableOpacity>
        </View>

        {/* En altta tab barın bulunduğu yer START*/}
        <View style={styles.viewBottom}>
          {/* CHATS Button */}
          <View>
            <TouchableOpacity
              onPress={() => { setIsShowingChats(true), setIsShowingDiscover(false), setIsShowingMode(false), alert("Chats clicked") }}
            >
              <View style={{ alignItems: 'center' }}>
                <Image
                  style={styles.tabBarImage}
                  source={isShowingChats ? require('./src/images/messageActive.png') : require('./src/images/messageDeactive.png')}
                  resizeMode={'cover'}
                />
              </View>
              <Text style={isShowingChats ? styles.tabBarTextsActive : styles.tabBarTextsDeactivated}>
                CHATS
              </Text>
            </TouchableOpacity>
          </View>

          {/* DISCOVER Button */}
          <View>
            <TouchableOpacity
              onPress={() => { setIsShowingChats(false), setIsShowingDiscover(true), setIsShowingMode(false), alert("Discover clicked") }}
            >
              <View style={{ alignItems: 'center' }}>
                <Image
                  style={styles.tabBarImage}
                  source={isShowingDiscover ? require('./src/images/compassActive.png') : require('./src/images/compassDeactive.png')}
                  resizeMode={'cover'}
                />
              </View>
              <Text style={isShowingDiscover ? styles.tabBarTextsActive : styles.tabBarTextsDeactivated}>
                DISCOVER
              </Text>
            </TouchableOpacity>
          </View>

          {/* MODE Button */}
          <View>
            <TouchableOpacity
              onPress={() => { setIsShowingChats(false), setIsShowingDiscover(false), setIsShowingMode(true), alert("Mode clicked") }}
            >
              <View style={{ alignItems: 'center' }}>
                <Image
                  style={styles.tabBarImage}
                  source={require('./src/images/balloon.png')}
                  resizeMode={'cover'}
                />
              </View>
              <Text style={isShowingMode ? styles.tabBarTextsActive : styles.tabBarTextsDeactivated}>
                MODE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* En altta tab barın bulunduğu yer END*/}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#65bd53',
  },

  viewTop: {
    flexDirection: 'column',

  },

  viewTop1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 10
  },

  profilImageTouchable: {
    borderWidth: 2,
    borderRadius: 100,
    marginTop: 5,
    borderColor: '#fff'
  },

  textAhlem: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold'
  },

  viewTextInput: {
    alignItems: 'stretch',
    paddingHorizontal: 20
  },

  textInput: {
    height: 50,
    borderRadius: 30,
    backgroundColor: '#84ca75',
    color: '#fff',
    fontSize: 18,
    paddingLeft: 20,
  },

  viewMiddle: {
    flex: 1,
    marginTop: 20,
    marginBottom: -150,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#fcfcfc'
  },

  users: {
    paddingTop: 20,
    paddingLeft: 20,
    marginBottom: 80,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },

  usersTouchable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 30
  },

  usersTextsView: {
    flexDirection: 'column'
  },

  usersImageandText: {
    flexDirection: 'row'
  },

  username: {
    color: '#3c3c3c',
    paddingTop: 5,
    paddingLeft: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },

  message: {
    color: '#5d5d5d',
    paddingTop: 5,
    paddingLeft: 10,
    fontSize: 16
  },

  time: {
    fontSize: 12,
    paddingRight: 25,
    color: '#626262'
  },

  numberOfMessage: {
    color: '#fff',
    marginTop: 5,
    marginRight: 15,
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: '#65bd53',
    alignSelf: 'center',
    borderRadius: 100
  },

  viewBottom: {
    flex: .13,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 12,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
  },

  viewBottomElements: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  pencil: {
    alignItems: 'flex-end',
    position: 'relative',
    right: 40,
    bottom: 10,
  },

  pencilImage: {
    width: 60,
    height: 60
  },

  tabBarImage: {
    width: 30,
    height: 30
  },

  tabBarTextsActive: {
    color: '#545454',
    paddingTop: 5,
    fontSize: 14,
    fontWeight: 'bold'
  },

  tabBarTextsDeactivated: {
    color: '#c6c6c6',
    paddingTop: 5,
    fontSize: 14,
    fontWeight: 'bold'
  }

})

export default App;