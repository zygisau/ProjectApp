import React, { Component } from 'react'
import Swiper from 'react-native-deck-swiper'
import { Button, StyleSheet, Text, View, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');
import SlidingPanel from 'react-native-sliding-up-down-panels';



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

          </Swiper>
          <View style={styles.bodyViewStyle}>
            <Text>Hello My World</Text>
          </View>

          <SlidingPanel
              headerLayoutHeight = {100}
              headerLayout = { () =>
                  <View style={styles.headerLayoutStyle}>
                    <Text style={styles.commonTextStyle}>My Awesome sliding panel</Text>
                  </View>
              }
              slidingPanelLayout = { () =>
                  <View style={styles.slidingPanelLayoutStyle}>
                    <Text style={styles.commonTextStyle}>The best thing about me is you</Text>
                  </View>
              }
          />
        </View>

    );
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
  },
  bodyViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerLayoutStyle: {
    width,
    height: 100,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slidingPanelLayoutStyle: {
    width,
    height,
    backgroundColor: '#7E52A0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  commonTextStyle: {
    color: 'white',
    fontSize: 18,
  },

});

export default Home