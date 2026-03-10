// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BlizzardOutlinedSvg from '@colelab/icons-svg/es/asn/BlizzardOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BlizzardOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BlizzardOutlinedSvg }, slots);
  },
});
