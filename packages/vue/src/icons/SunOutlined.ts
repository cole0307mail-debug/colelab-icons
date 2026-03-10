// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SunOutlinedSvg from '@colelab/icons-svg/es/asn/SunOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SunOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SunOutlinedSvg }, slots);
  },
});
