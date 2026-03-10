// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AppstoreAddOutlinedSvg from '@colelab/icons-svg/es/asn/AppstoreAddOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AppstoreAddOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AppstoreAddOutlinedSvg }, slots);
  },
});
