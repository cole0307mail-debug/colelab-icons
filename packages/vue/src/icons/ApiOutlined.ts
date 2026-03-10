// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ApiOutlinedSvg from '@colelab/icons-svg/es/asn/ApiOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ApiOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ApiOutlinedSvg }, slots);
  },
});
