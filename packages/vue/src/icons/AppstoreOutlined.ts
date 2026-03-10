// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AppstoreOutlinedSvg from '@colelab/icons-svg/es/asn/AppstoreOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AppstoreOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AppstoreOutlinedSvg }, slots);
  },
});
