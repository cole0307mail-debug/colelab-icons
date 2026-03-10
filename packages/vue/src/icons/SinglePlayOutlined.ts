// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SinglePlayOutlinedSvg from '@colelab/icons-svg/es/asn/SinglePlayOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SinglePlayOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SinglePlayOutlinedSvg }, slots);
  },
});
