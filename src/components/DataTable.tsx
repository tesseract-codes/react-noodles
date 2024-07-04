
import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
}

const DataTable: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
      });
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'body', headerName: 'Body', width: 250 }
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={posts} columns={columns} />
    </div>
  );
};

export default DataTable;
