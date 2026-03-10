// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import GimbalDirectionControlOutlinedSvg from '@colelab/icons-svg/es/asn/GimbalDirectionControlOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'GimbalDirectionControlOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: GimbalDirectionControlOutlinedSvg }, slots);
  },
});
