// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FloorOutlinedSvg from '@colelab/icons-svg/es/asn/FloorOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FloorOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FloorOutlinedSvg }, slots);
  },
});
