import React, { useState } from 'react'
import { Table } from 'react-bootstrap';
import { Modal } from 'antd'
import api from '@services/apis'
import { randomId, convertToVND } from '@mieuteacher/meomeojs';
import { useSelector, useDispatch } from 'react-redux';
import CategoryCreateForm from './components/BrandCreateForm';
import { brandAction } from '@slices/brand.slice';
export default function Recycle() {
    const dispatch = useDispatch()
    const brandStore = useSelector(store => store.brandStore);
    return (
        <>
            <h4>Brand Blocked List</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Tools</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        brandStore.data?.map((item, index) => {
                            if (!item.status) {
                                return (
                                    <tr key={randomId()}>
                                        <td>{index + 1}</td>
                                        <td >{item.title}</td>
                                        <td>
                                            <button
                                                onClick={() => {
                                                    Modal.warning({
                                                        title: "Warning",
                                                        content: `Are you sure you want to unblock this category? (${item.title})`,
                                                        onOk: async () => {
                                                            try {
                                                                let result = await api.brand.update(item.id, { status: true })
                                                                if (result.status == 200) {
                                                                    dispatch(brandAction.update(result.data.data))
                                                                }
                                                            } catch (err) {
                                                                console.log('err', err);
                                                            }
                                                        },
                                                        onCancel: () => { }

                                                    })
                                                }}
                                                className="btn btn-success"
                                            >Unblock</button>
                                        </td>
                                    </tr>
                                )
                            }
                        })
                    }
                </tbody>
            </Table >
        </>
    )
}