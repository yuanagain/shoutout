// helpers/Styles.js

import { 
  Dimensions, 
  StyleSheet, 
} from 'react-native';

import { Black } from './Colors.js'

export const __STYLES__ = StyleSheet.create({
  h1: { 
    fontSize: 72
  },
  h2: { 
    fontSize: 56
  },
  h3: {
    fontSize: 30
  },
  h4: {
    fontSize: 20
  },
  p: {
    fontSize: 14
  },
  bigline: {
    height: 3,
    flex: 0,
  },
	shadow: {
    shadowOffset: {  
      width: 3,  
      height: 3
    },
    shadowColor: Black(1),
    shadowOpacity: 0.5,
	},
	shadowUp: {
    shadowOffset: {  
      width: 0,  
      height: -4
    },
    shadowColor: Black(1),
    shadowOpacity: 0.5,
	},
	smallShadow: {
    shadowOffset: {   
      width: 1,  
      height: 4
    },
    zIndex: 2,
    shadowColor: Black(1),
    shadowOpacity: 0.5,
	},
	smallShadowUp: {
    shadowOffset: {   
      width: 0,  
      height: -1
    },
    zIndex: 1,
    shadowColor: Black(1),
    shadowOpacity: 0.5,
	}
});
