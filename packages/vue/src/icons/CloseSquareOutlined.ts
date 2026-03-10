// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CloseSquareOutlinedSvg from '@colelab/icons-svg/es/asn/CloseSquareOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CloseSquareOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CloseSquareOutlinedSvg }, slots);
  },
});
