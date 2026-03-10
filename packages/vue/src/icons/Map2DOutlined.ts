// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import Map2DOutlinedSvg from '@colelab/icons-svg/es/asn/Map2DOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'Map2DOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: Map2DOutlinedSvg }, slots);
  },
});
