// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ResourceOutlinedSvg from '@colelab/icons-svg/es/asn/ResourceOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ResourceOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ResourceOutlinedSvg }, slots);
  },
});
