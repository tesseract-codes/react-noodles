
import { useState } from 'react';
import { Box, Checkbox, Typography, IconButton } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

const departments = [
	{
  	name: "customer_service",
  	subDepartments: ["support","customer_success"]
	},
	{
  	name: "design",
  	subDepartments: ["graphic_design","product_design","web_design"	]
	}
  ];


const Departments = () => {
  const [expanded, setExpanded] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  const handleExpand = (name: string) => {
    setExpanded(expanded.includes(name)
      ? expanded.filter((item) => item !== name)
      : [...expanded, name]);
  };

  const handleSelect = (name: string) => {
    setSelected(selected.includes(name)
      ? selected.filter((item) => item !== name)
      : [...selected, name]);
  };

  return (
    <Box>
      {departments.map((department) => (
        <Box key={department.name}>
          <Box display="flex" alignItems="center">
            <IconButton onClick={() => handleExpand(department.name)}>
              {expanded.includes(department.name) ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
            <Checkbox
              checked={selected.includes(department.name)}
              onChange={() => handleSelect(department.name)}
            />
            <Typography>{department.name}</Typography>
          </Box>
          {expanded.includes(department.name) && (
            <Box pl={4}>
              {department.subDepartments.map((sub) => (
                <Box key={sub} display="flex" alignItems="center">
                  <Checkbox
                    checked={selected.includes(sub)}
                    onChange={() => handleSelect(sub)}
                  />
                  <Typography>{sub}</Typography>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default Departments;
