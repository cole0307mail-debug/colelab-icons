// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AndroidOutlinedSvg from '@colelab/icons-svg/es/asn/AndroidOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AndroidOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AndroidOutlinedSvg }, slots);
  },
});
