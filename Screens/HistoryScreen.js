import React from 'react';
import { View, StyleSheet,ScrollView,ActivityIndicator } from 'react-native';
import axios from 'axios';
import {useState,useEffect} from 'react'
import backendURL from '../config';
import { useSelector } from 'react-redux';
import Job from '../Components/Job';

export default function HistoryScreen() {
  const [history,setHistory] = useState([])
  const [loading,setLoading] = useState(false)

  //const token = useSelector((state)=>state.access)
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI1MzYyNTYwLCJpYXQiOjE3MjUzNTg5NjAsImp0aSI6ImVlMTY1Y2UyMWIyMjRjYTFiMDYzMGQ3NWMwN2U4MjAwIiwidXNlcl9pZCI6M30.zwZSsVV76n0hM7PCwAuJjNgWXMTRTgV-3AD5LAiGLNw'
  const config = {
    headers:{
      'Content-Type' : 'application/json',
      'Authorization' : `JWT ${token}`,
      'Accept' : 'application/json'
    }
  }
  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`${backendURL}/app/history/`, config);
        setHistory(response.data);
      } catch (error) {
        console.error(error);
      }finally{
        setLoading(false)
      }
    };

    fetchHistory();
  }, []);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="extraLarge" color="#0e2064" style={styles.loadingIndicator} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        {history.map((value, index) => (
          <Job
            key={index}
            job={value}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f8f8f8',
  },
  content: {
    flex: 1,
    padding:1,
  },
  loading:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  loadingIndicator: {
    width: 100, // Adjust size as needed
    height: 100, // Adjust size as needed
  },
});
