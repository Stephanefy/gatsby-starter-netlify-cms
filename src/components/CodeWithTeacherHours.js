import React from 'react';
import { Table } from 'antd';



const BusinessHours = () => {
    const columns = [
        {
          title: '',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '',
          dataIndex: '',
          key: 'age',
        },
        {
          title: 'Matin',
          dataIndex: 'matin',
          key: 'address',
        },
        {
          title: '',
          key: '',
          dataIndex: 'tags',
        },
        {
          title: 'Après-midi',
          dataIndex: 'aprem',
          key: 'action',
        },
      ];
      
      const data = [
        {
          key: '1',
          name: 'Lundi',
          matin: '',
          aprem: '18h00 - 19:00',
        },
        {
          key: '2',
          name: 'Mardi',
          age: 42,
          matin: '12:00 - 13:00',
          aprem: '',
        },
        {
          key: '3',
          name: 'Mercredi',
          matin: '',
          aprem: '18:00 - 19:00',
        },
        {
          key: '4',
          name: 'Jeudi',
          matin: '12:00 - 13:00',
          aprem: '',
        },
        {
          key: '5',
          name: 'Vendredi',
          matin: '12:00 - 13:00',
          aprem: '18h00 - 19:00',
        },
      ];

        return (
            <Table columns={columns} dataSource={data} pagination={false} />
        )
    }


export default BusinessHours;