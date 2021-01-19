import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'

const App = () => {
  const [value, onChangeText] = React.useState();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.viewTop}>
          <View style={styles.viewTop1}>
            <View>
              <TouchableOpacity style={styles.profilImageTouchable}>
                <Image
                  style={{ width: 35, height: 35 }}
                  source={require('./src/images/reactnative.png')}
                  resizeMode={'center'}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.textAhlem}>
                Ahlem
            </Text>
            </View>
            <View>
              <TouchableOpacity>
                <Image
                  style={{ width: 40, height: 40 }}
                  source={require('./src/images/reactnative.png')}
                  resizeMode={'center'}
                />
              </TouchableOpacity>
            </View>
          </View>
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

        <View style={styles.viewMiddle}>
          <View style={styles.users}>
            <ScrollView>
              <TouchableOpacity style={styles.usersTouchable}>
                <View style={styles.usersImageandText}>
                  <Image
                    style={{ width: 60, height: 60, borderRadius: 500 }}
                    source={require('./src/images/1.jpg')}
                    resizeMode={'center'}
                  />
                  <View style={styles.usersTextsView}>
                    <Text style={styles.username}>
                      İsmail Onur
                </Text>
                    <Text style={styles.message}>
                      I'm a software development
                </Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.time}>
                    5 Min
                </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.usersTouchable}>
                <View style={styles.usersImageandText}>
                  <Image
                    style={{ width: 60, height: 60, borderRadius: 500 }}
                    source={require('./src/images/1.jpg')}
                    resizeMode={'center'}
                  />
                  <View style={styles.usersTextsView}>
                    <Text style={styles.username}>
                      İsmail Onur
                </Text>
                    <Text style={styles.message}>
                      I'm a software development
                </Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.time}>
                    5 Min
                </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.usersTouchable}>
                <View style={styles.usersImageandText}>
                  <Image
                    style={{ width: 60, height: 60, borderRadius: 500 }}
                    source={require('./src/images/1.jpg')}
                    resizeMode={'center'}
                  />
                  <View style={styles.usersTextsView}>
                    <Text style={styles.username}>
                      İsmail Onur
                </Text>
                    <Text style={styles.message}>
                      I'm a software development
                </Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.time}>
                    5 Min
                </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.usersTouchable}>
                <View style={styles.usersImageandText}>
                  <Image
                    style={{ width: 60, height: 60, borderRadius: 500 }}
                    source={require('./src/images/1.jpg')}
                    resizeMode={'center'}
                  />
                  <View style={styles.usersTextsView}>
                    <Text style={styles.username}>
                      İsmail Onur
                </Text>
                    <Text style={styles.message}>
                      I'm a software development
                </Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.time}>
                    5 Min
                </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.usersTouchable}>
                <View style={styles.usersImageandText}>
                  <Image
                    style={{ width: 60, height: 60, borderRadius: 500 }}
                    source={require('./src/images/1.jpg')}
                    resizeMode={'center'}
                  />
                  <View style={styles.usersTextsView}>
                    <Text style={styles.username}>
                      İsmail Onur
                </Text>
                    <Text style={styles.message}>
                      I'm a software development
                </Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.time}>
                    5 Min
                </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.usersTouchable}>
                <View style={styles.usersImageandText}>
                  <Image
                    style={{ width: 60, height: 60, borderRadius: 500 }}
                    source={require('./src/images/1.jpg')}
                    resizeMode={'center'}
                  />
                  <View style={styles.usersTextsView}>
                    <Text style={styles.username}>
                      İsmail Onur
                </Text>
                    <Text style={styles.message}>
                      I'm a software development
                </Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.time}>
                    5 Min
                </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.usersTouchable}>
                <View style={styles.usersImageandText}>
                  <Image
                    style={{ width: 60, height: 60, borderRadius: 500 }}
                    source={require('./src/images/1.jpg')}
                    resizeMode={'center'}
                  />
                  <View style={styles.usersTextsView}>
                    <Text style={styles.username}>
                      İsmail Onur
                </Text>
                    <Text style={styles.message}>
                      I'm a software development
                </Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.time}>
                    5 Min
                </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.usersTouchable}>
                <View style={styles.usersImageandText}>
                  <Image
                    style={{ width: 60, height: 60, borderRadius: 500 }}
                    source={require('./src/images/1.jpg')}
                    resizeMode={'center'}
                  />
                  <View style={styles.usersTextsView}>
                    <Text style={styles.username}>
                      İsmail Onur
                </Text>
                    <Text style={styles.message}>
                      I'm a software development
                </Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.time}>
                    5 Min
                </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.usersTouchable}>
                <View style={styles.usersImageandText}>
                  <Image
                    style={{ width: 60, height: 60, borderRadius: 500 }}
                    source={require('./src/images/1.jpg')}
                    resizeMode={'center'}
                  />
                  <View style={styles.usersTextsView}>
                    <Text style={styles.username}>
                      İsmail Onur
                </Text>
                    <Text style={styles.message}>
                      I'm a software development
                </Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.time}>
                    5 Min
                </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.usersTouchable}>
                <View style={styles.usersImageandText}>
                  <Image
                    style={{ width: 60, height: 60, borderRadius: 500 }}
                    source={require('./src/images/1.jpg')}
                    resizeMode={'center'}
                  />
                  <View style={styles.usersTextsView}>
                    <Text style={styles.username}>
                      İsmail Onur
                </Text>
                    <Text style={styles.message}>
                      I'm a software development
                </Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.time}>
                    5 Min
                </Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>

        <View style={styles.pencil}>
            <TouchableOpacity>
              <Image
                style={styles.pencilImage}
                source={require('./src/images/pencil.png')}
                resizeMode={'cover'}
              />
            </TouchableOpacity>
        </View>

        <View style={styles.viewBottom}>
          <View>
            <TouchableOpacity>
              <View style={{ alignItems: 'center' }}>
                <Image
                  style={{ width: 35, height: 35 }}
                  source={require('./src/images/reactnative.png')}
                  resizeMode={'center'}
                />
              </View>
              <Text>Chats</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <View style={{ alignItems: 'center' }}>
                <Image
                  style={{ width: 35, height: 35 }}
                  source={require('./src/images/reactnative.png')}
                  resizeMode={'center'}
                />
              </View>
              <Text>Discover</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <View style={{ alignItems: 'center' }}>
                <Image
                  style={{ width: 35, height: 35 }}
                  source={require('./src/images/reactnative.png')}
                  resizeMode={'center'}
                />
              </View>
              <Text>Mode</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    borderColor: '#fff'
  },

  textAhlem: {
    color: '#fff',
    fontSize: 36
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
    paddingTop: 5,
    paddingLeft: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },

  message: {
    paddingTop: 5,
    paddingLeft: 10,
    fontSize: 16
  },

  time: {
    paddingRight: 25
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

  pencil:{
    alignItems: 'flex-end',
    position: 'relative',
    right: 40,
    bottom: 10,
  },

  pencilImage:{
    width: 60,
    height: 60
  }
})

export default App;