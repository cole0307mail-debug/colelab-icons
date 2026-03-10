// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import Map3DOutlinedSvg from '@colelab/icons-svg/es/asn/Map3DOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'Map3DOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: Map3DOutlinedSvg }, slots);
  },
});
