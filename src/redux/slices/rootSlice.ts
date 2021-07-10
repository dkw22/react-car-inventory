import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: "Kia",
        model: "Rondo",
        year: "2007",
        color: "Blue",
        price: "200.00",
        doors: "4",
        seats: "5",
        condition: "used"
    },
    reducers: {
        chooseMake: (state, action) => { state.make = action.payload},
        chooseModel: (state, action) => { state.model = action.payload},
        chooseYear: (state, action) => { state.year = action.payload},
        chooseColor: (state, action) => { state.color = action.payload},
        choosePrice: (state, action) => { state.price = action.payload},
        chooseDoors: (state, action) => { state.doors = action.payload},
        chooseSeats: (state, action) => { state.seats = action.payload},
        chooseCondition: (state, action) => { state.condition = action.payload}
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseMake, chooseModel, chooseYear, chooseColor, choosePrice, chooseDoors, chooseSeats, chooseCondition} = rootSlice.actions;