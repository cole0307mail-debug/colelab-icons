// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SpaceOutlinedSvg from '@colelab/icons-svg/es/asn/SpaceOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SpaceOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SpaceOutlinedSvg }, slots);
  },
});
