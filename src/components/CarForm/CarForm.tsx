import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseMake, chooseModel, chooseYear, chooseColor, chooseCondition, choosePrice } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

import { useGetData } from '../../custom-hooks';

interface CarFormProps {
    id?:string;
    data?:{}
}

interface CarState {
    make: string;
    model: string;
    year: number;
    color: string;
    condition: string;
    price: number;
}

export const CarForm = (props:CarFormProps) => {

    const dispatch = useDispatch();
    let { carData, getData } = useGetData();
    const store = useStore()
    const make = useSelector<CarState>(state => state.make)
    const model = useSelector<CarState>(state => state.model)
    const year = useSelector<CarState>(state => state.year)
    const color = useSelector<CarState>(state => state.color)
    const condition = useSelector<CarState>(state => state.condition)
    const price = useSelector<CarState>(state => state.price)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            server_calls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            // window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseMake(data.make))
            dispatch(chooseModel(data.model))
            dispatch(chooseYear(data.year))
            dispatch(chooseColor(data.color))
            dispatch(chooseCondition(data.condition))
            dispatch(choosePrice(data.price))
            server_calls.create(store.getState())
            // window.location.reload()
        }
    }

    return ( 
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="make">Car Make</label>
                    <Input {...register('make')} name="make" placeholder='Make' />
                </div>
                <div>
                    <label htmlFor="model">Model</label>
                    <Input {...register('model')} name="model" placeholder="Model"/>
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <Input {...register('year')} name="year" placeholder="Year"/>
                </div>
                <div>
                    <label htmlFor="color">Color</label>
                    <Input {...register('color')} name="color" placeholder="Color"/>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <Input {...register('price')} name="price" placeholder="Price"/>
                </div>
                <div>
                    <label htmlFor="doors">Doors</label>
                    <Input {...register('doors')} name="doors" placeholder="Doors"/>
                </div>
                <div>
                    <label htmlFor="seats">Seats</label>
                    <Input {...register('seats')} name="seats" placeholder="Seats"/>
                </div>
                <div>
                    <label htmlFor="condition">Condition</label>
                    <Input {...register('condition')} name="condition" placeholder="Condition"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}