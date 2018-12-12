import React, { Component } from 'react'
import Swiper from 'react-native-deck-swiper'
import { Button, StyleSheet, Text, View } from 'react-native'
import SwipeUpDown from 'react-native-swipe-up-down';


class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cards: ['1', '2', '3'],
      swipedAllCards: false,
      swipeDirection: '',
      cardIndex: 0
    }
  }

  renderCard = (card, index) => {
    return (
        <View style={styles.card}>
          <Text style={styles.text}>{card} - {index}</Text>
        </View>
    )
  };

  onSwiped = (type) => {
    console.log(`on swiped ${type}`)
  }

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true
    })
  };

  swipeLeft = () => {
    this.swiper.swipeLeft()
  };

  render () {
    return (
        <View style={styles.container}>
          <Swiper
              ref={swiper => {
                this.swiper = swiper
              }}
              onSwiped={() => this.onSwiped('general')}
              onSwipedLeft={() => this.onSwiped('left')}
              onSwipedRight={() => this.onSwiped('right')}
              onSwipedTop={() => this.onSwiped('top')}
              onSwipedBottom={() => this.onSwiped('bottom')}
              onTapCard={this.swipeLeft}
              cards={this.state.cards}
              cardIndex={this.state.cardIndex}
              cardVerticalMargin={40}
              renderCard={this.renderCard}
              onSwipedAll={this.onSwipedAllCards}
              stackSize={3}
              stackSeparation={15}
              overlayLabels={{
                bottom: {
                  title: 'BLEAH',
                  style: {
                    label: {
                      backgroundColor: 'black',
                      borderColor: 'black',
                      color: 'white',
                      borderWidth: 1
                    },
                    wrapper: {
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }
                  }
                },
                left: {
                  title: 'NOPE',
                  style: {
                    label: {
                      backgroundColor: 'black',
                      borderColor: 'black',
                      color: 'white',
                      borderWidth: 1
                    },
                    wrapper: {
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      justifyContent: 'flex-start',
                      marginTop: 30,
                      marginLeft: -30
                    }
                  }
                },
                right: {
                  title: 'LIKE',
                  style: {
                    label: {
                      backgroundColor: 'black',
                      borderColor: 'black',
                      color: 'white',
                      borderWidth: 1
                    },
                    wrapper: {
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      marginTop: 30,
                      marginLeft: 30
                    }
                  }
                },
                top: {
                  title: 'SUPER LIKE',
                  style: {
                    label: {
                      backgroundColor: 'black',
                      borderColor: 'black',
                      color: 'white',
                      borderWidth: 1
                    },
                    wrapper: {
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }
                  }
                }
              }}
              animateOverlayLabelsOpacity
              animateCardOpacity
              swipeBackCard
          >
            <Button onPress={() => this.swiper.swipeBack()} title='Swipe Back' />
          </Swiper>
          <SwipeUpDown
              hasRef={ref => (this.itemMini = ref)}
                itemMini={
                <Text style={styles.welcome}>Welcome to React Native!</Text>
               }
              itemFull={
                <Text style={styles.instructions}>
                  Welcome to component {'\n'} Swipe Up Down on React Native
                </Text>
              }
              onShowMini={() => console.log('mini')}
              onShowFull={() => console.log('full')}
              disablePressToShow={false}
              style={{ backgroundColor: '#ccc' }}
              animation="easeInEaseOut"
          />
        </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent'
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent'
  }
})

export default Home