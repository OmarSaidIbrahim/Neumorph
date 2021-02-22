// https://github.com/tokkozhin/react-native-neomorph-shadows

import React, { Component } from 'react'
import { Text, TouchableOpacity, View, Switch } from 'react-native'
import { Neomorph } from 'react-native-neomorph-shadows';
import Icon from 'react-native-vector-icons/Ionicons'
import Prova from './prova'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressStatus: false,
      isEnabled: false
    };
  }

  render() {
    return (
      <View style={{flex:1, backgroundColor: "#E3EDF7"}}>
        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", margin: 15}}>
          <Text style={{fontSize: 30, color: "#31456A", fontWeight: "bold"}}>Clock</Text>
          <TouchableOpacity onPress={()=>this.setState({pressStatus: !this.state.pressStatus})}>
            <Neomorph
              inner={this.state.pressStatus} // <- enable shadow inside of neomorph
              swapShadows // <- change zIndex of each shadow color
              style={{
                shadowRadius: 10,
                borderRadius: 25,
                backgroundColor: '#E3EDF7',
                width: 50,
                height: 50,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Icon name="settings-sharp" size={30} color="#31456A"/>
            </Neomorph>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: "center"}}>
          <Neomorph
            style={{
              shadowRadius: 3,
              borderRadius: 100,
              backgroundColor: '#E3EDF7',
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Neomorph
              inner
              style={{
                shadowRadius: 7,
                borderRadius: 90,
                backgroundColor: '#E3EDF7',
                width: 180,
                height: 180,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Neomorph
                style={{
                  shadowRadius: 7,
                  borderRadius: 50,
                  backgroundColor: '#E3EDF7',
                  width: 100,
                  height: 100,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Prova/>
                {/* <View style={{backgroundColor: "red", width: 1, height:"45%"}}/> */}
              </Neomorph>
            </Neomorph>
          </Neomorph>
        </View>
        <View style={{alignItems: "center"}}>
            <Neomorph
              //inner={this.state.pressStatus} // <- enable shadow inside of neomorph
              swapShadows // <- change zIndex of each shadow color
              style={{
                shadowRadius: 10,
                borderRadius: 10,
                backgroundColor: '#E3EDF7',
                width: 250,
                height: 50,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
                marginVertical: 20
              }}
            >
              <Text style={{fontSize: 25, fontWeight: "bold", color: "#31456A"}}>05:00</Text>
              <Text style={{marginLeft: 2}}>a.m.</Text>
              <Switch
                trackColor={{ false: "#DEE8F2", true: "#B9CEE2" }}
                thumbColor={this.state.isEnabled ? "#31456A" : "#E3EDF7"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => this.setState({isEnabled: !this.state.isEnabled})}
                value={this.state.isEnabled}
              />
            </Neomorph>
            <Neomorph
              //inner={this.state.pressStatus} // <- enable shadow inside of neomorph
              swapShadows // <- change zIndex of each shadow color
              style={{
                shadowRadius: 10,
                borderRadius: 10,
                backgroundColor: '#E3EDF7',
                width: 250,
                height: 50,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly"
              }}
            >
              <Text style={{fontSize: 25, fontWeight: "bold", color: "#31456A"}}>07:30</Text>
              <Text style={{marginLeft: 2}}>p.m.</Text>
              <Switch
                trackColor={{ false: "#DEE8F2", true: "#B9CEE2" }}
                thumbColor={this.state.isEnabled ? "#31456A" : "#E3EDF7"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => this.setState({isEnabled: !this.state.isEnabled})}
                value={this.state.isEnabled}
              />
            </Neomorph>
          </View>
        
        <View style={{width: '100%',marginVertical: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", position: "absolute", bottom: 0}}>
          <TouchableOpacity>
            <Neomorph
              inner={false} // <- enable shadow inside of neomorph
              swapShadows // <- change zIndex of each shadow color
              style={{
                shadowRadius: 10,
                borderRadius: 20,
                backgroundColor: '#E3EDF7',
                width: 70,
                height: 70,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <View style={{flexDirection: "column", alignItems: "center"}}>
                <Icon name="alarm-outline" size={30} color="#31456A"/>
                <Text style={{fontWeight: "bold", color: "#31456A", fontSize: 12}}>Alarm</Text>
              </View>
            </Neomorph>
          </TouchableOpacity>
          <TouchableOpacity>
            <Neomorph
              inner={false} // <- enable shadow inside of neomorph
              swapShadows // <- change zIndex of each shadow color
              style={{
                shadowRadius: 10,
                borderRadius: 20,
                backgroundColor: '#E3EDF7',
                width: 70,
                height: 70,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <View style={{flexDirection: "column", alignItems: "center"}}>
                <Icon name="globe-outline" size={30} color="#31456A"/>
                <Text style={{fontWeight: "bold", color: "#31456A", fontSize: 12}}>World clock</Text>
              </View>
            </Neomorph>
          </TouchableOpacity>
          <TouchableOpacity>
            <Neomorph
              inner={false} // <- enable shadow inside of neomorph
              swapShadows // <- change zIndex of each shadow color
              style={{
                shadowRadius: 10,
                borderRadius: 20,
                backgroundColor: '#E3EDF7',
                width: 70,
                height: 70,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <View style={{flexDirection: "column", alignItems: "center"}}>
                <Icon name="timer-outline" size={30} color="#31456A"/>
                <Text style={{fontWeight: "bold", color: "#31456A", fontSize: 12}}>Stopwatch</Text>
              </View>
            </Neomorph>
          </TouchableOpacity>
          <TouchableOpacity>
            <Neomorph
              inner={false} // <- enable shadow inside of neomorph
              swapShadows // <- change zIndex of each shadow color
              style={{
                shadowRadius: 10,
                borderRadius: 20,
                backgroundColor: '#E3EDF7',
                width: 70,
                height: 70,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <View style={{flexDirection: "column", alignItems: "center"}}>
                <Icon name="hourglass-outline" size={30} color="#31456A"/>
                <Text style={{fontWeight: "bold", color: "#31456A", fontSize: 12}}>Timer</Text>
              </View>
            </Neomorph>
          </TouchableOpacity>
          </View>
      </View>
    )
  }
}
