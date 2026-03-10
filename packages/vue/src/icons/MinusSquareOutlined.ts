// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MinusSquareOutlinedSvg from '@colelab/icons-svg/es/asn/MinusSquareOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MinusSquareOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MinusSquareOutlinedSvg }, slots);
  },
});
