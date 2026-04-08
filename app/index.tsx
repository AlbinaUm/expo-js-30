import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useState} from "react";
import HeaderTitle from "@/components/HeaderTitle";
import Container from "@/components/ui/Container";
import ButtonCounter from "@/components/ui/ButtonCounter";


export default function HomeScreen() {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount(prevState => prevState + 1);
    const decrement = () => setCount(prevState => prevState - 1);
    const reset = () => setCount(0);


  return (
      <Container>
          <HeaderTitle title='Мой первый счетчик'/>
          <View>
              <Text style={styles.counterText}>Count: {count}</Text>
          </View>
          <View style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
              <ButtonCounter bgColor={'#5fda40'} buttonText='+' onIncrement={increment}/>
              <ButtonCounter bgColor={'#da4040'} buttonText='+' onIncrement={decrement}/>
          </View>

          <TouchableOpacity onPress={reset}>
              <Text style={styles.resetButton}>Cброс счетчика</Text>
          </TouchableOpacity>
      </Container>
  );
}

const styles = StyleSheet.create({
    counterText: {
      fontSize: 20,
      textAlign: 'center',
    },
    resetButton: {
        color: '#8d8d8d',
        textDecorationColor: '#8d8d8d',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        fontSize: 20,
        marginHorizontal: 'auto',
        marginVertical: 10
    }
});
