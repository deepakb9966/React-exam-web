import {create} from "zustand";
import axios from 'axios';
import { persist, createJSONStorage } from 'zustand/middleware'

export const useCounterStore = create((set) => ({
   topic: ["HTML"],
   ans:[],
   questions:[[]],
   topics:[{topic:"html",id:"1"},{topic:"css",id:"2"}],
  // fetchTopic: async () => {
  //   await fetch(`http://localhost:8082/Exam/topics`)
  //       .then(response => response.json())
  //       .then(data => set({topics: data.items}))
  //     },
   
   getans:(val,n)=>{
    set(state => ({
      ans: [...state.ans,{value:val,name:n}]
    }))

   },
   updateTopic: (topic) => {
    set(state => ({
      topic: [topic]
    }))
  },
  getque:(res)=>{
    set(state => ({
      questions: [res.data.items]
    }))

  },
  saveAnswer:(opt,answer)=>{
    console.log("option",opt)
    set(state =>({
      ans:[...state.ans,answer]
    }))
  },
  reset: () => {
    set(state =>({
      answers:[]
    }))
  },

//    increaseCounterNumber: () => set((state) => ({
//     counterValues: {
//         ...state.counterValues,
//         number: state.counterValues.number + 1
//     }
// })),
   
}))